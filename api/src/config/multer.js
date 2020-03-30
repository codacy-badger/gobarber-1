import multer from 'multer'; // Lidar com o multipart
import crypto from 'crypto'; // Transforma nome de imagem único
import { extname, resolve } from 'path'; // Devolve o tipo de extensão
// Navegação de arquivos

// Poderiamos armazenar no S3, por exemplo, mas vai ficar em tmp
export default {
  storage: multer.diskStorage({
    destination: resolve(__dirname, '..', '..', 'tmp', 'uploads'),
    filename: (req, file, cb) => {
      crypto.randomBytes(16, (err, res) => {
        if (err) return cb(err);
        // Adicionando nome único com cripto
        // Pegando apenas a extensão do arquivo
        // Pois usuários podem nomear de forma estranha
        // 17346781ghd17g.png
        return cb(null, res.toString('hex') + extname(file.originalname));
      });
    },
  }),
};
