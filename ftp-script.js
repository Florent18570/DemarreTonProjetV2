const PromiseFtp = require("promise-ftp");
const fs = require("fs");
const path = require("path");

const ftpConfig = {
  host: "176.9.105.115",
  user: "demarret",
  password: "VY@W*ws8mp675F", // Assurez-vous de masquer ou de sécuriser ce mot de passe dans un environnement réel
};

const localDirectory = "./build/";
const remoteDirectory = "/www/";

const ftp = new PromiseFtp();

const uploadDirectory = async (localPath, remotePath) => {
  if (!fs.existsSync(localPath)) {
    console.error(`Le répertoire local ${localPath} n'existe pas.`);
    return;
  }

  const files = fs.readdirSync(localPath);

  for (const file of files) {
    const localFilePath = path.join(localPath, file);
    const remoteFilePath = path.posix.join(remotePath, file);

    if (!fs.existsSync(localFilePath)) {
      console.error(`Le fichier ${localFilePath} n'existe pas.`);
      continue;
    }

    if (fs.statSync(localFilePath).isDirectory()) {
      try {
        await ftp.mkdir(remoteFilePath, true);
        console.log(`Répertoire créé : ${remoteFilePath}`);
      } catch (error) {
        console.error(
          `Erreur lors de la création du répertoire ${remoteFilePath} : `,
          error
        );
      }
      await uploadDirectory(localFilePath, remoteFilePath);
    } else {
      try {
        const stream = fs.createReadStream(localFilePath);
        await ftp.put(stream, remoteFilePath);
        console.log(`Fichier uploadé : ${localFilePath} à ${remoteFilePath}`);
      } catch (error) {
        console.error(
          `Erreur lors de l'upload du fichier ${localFilePath} : `,
          error
        );
      }
    }
  }
};

ftp
  .connect(ftpConfig)
  .then(() => {
    console.log("Connecté au serveur FTP.");
    return uploadDirectory(localDirectory, remoteDirectory);
  })
  .then(() => {
    console.log("Tous les fichiers ont été uploadés.");
    return ftp.end();
  })
  .catch((error) => {
    console.error("Erreur :", error);
  });
