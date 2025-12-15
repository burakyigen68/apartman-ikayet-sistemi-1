import express from 'express';
import { json } from 'body-parser';
import { authRoutes } from './routes/auth.routes';
import { complaintRoutes } from './routes/complaints.routes';
import { errorMiddleware } from './middlewares/error.middleware';

// Uygulama için bir Express instance'ı oluştur
const app = express();

// Middleware'leri ayarla
app.use(json()); // JSON verileri işlemek için body-parser kullan
app.use('/api/auth', authRoutes); // Kimlik doğrulama ile ilgili rotaları ekle
app.use('/api/complaints', complaintRoutes); // Şikayetlerle ilgili rotaları ekle

// Hata middleware'ini ekle
app.use(errorMiddleware);

// Uygulama başlatıldığında konsola bir mesaj yazdır
app.listen(process.env.PORT || 3000, () => {
    console.log(`Uygulama ${process.env.PORT || 3000} portunda çalışıyor.`);
});

// Uygulama modül olarak dışa aktar
export default app;