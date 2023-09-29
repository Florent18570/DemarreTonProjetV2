const FTP = require("ftp");
const fs = require("fs");

// Informations de connexion FTP
const ftpConfig = {
  host: "51.91.106.38", // Remplacez par l'adresse de votre serveur FTP
  user: "demarret",
  password: "VY@W*ws8mp675F",
};

// Répertoire local contenant les fichiers à envoyer
const localDirectory = "./DemarreTonProjetV2/build/";

// Répertoire distant sur le serveur FTP
const remoteDirectory = "/www/";

const removeFtpDirectory = async (ftp, path) => {
  try {
    const filelist = await ftp.list(path);
    for (const item of filelist) {
      if (item.type === '-') {
        await ftp.delete(item.name);
      } else if (item.type === 'd') {
        await removeFtpDirectory(ftp, `${path}/${item.name}`);
      }
    }
    await ftp.rmdir(path);
  } catch (error) {
    console.error(`Erreur lors de la suppression du répertoire ${path}: ${error.message}`);
  }
};

const main = async () => {
  const ftp = new FTP();

  ftp.on("ready", async () => {
    try {
      // Supprimer le contenu du répertoire distant "www"
      await removeFtpDirectory(ftp, remoteDirectory);

      // Téléverser de nouveaux fichiers
      await ftp.cwd("/");
      await ftp.cwd(remoteDirectory);

      const files = fs.readdirSync(localDirectory);

      for (const file of files) {
        const localFilePath = `${localDirectory}/${file}`;
        if (fs.statSync(localFilePath).isFile()) {
          await ftp.put(localFilePath, file);
        }
      }

      console.log("Tous les fichiers ont été téléchargés avec succès.");
    } catch (error) {
      console.error(`Une erreur s'est produite : ${error.message}`);
    } finally {
      ftp.end();
    }
  });

  ftp.connect(ftpConfig);
};

main();
