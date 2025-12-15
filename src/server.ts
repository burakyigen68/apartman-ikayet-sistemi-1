import express from 'express';
import { createServer } from 'http';
import app from './app';

// Uygulama için bir Express sunucusu oluştur
const server = createServer(app);

// Sunucunun dinleyeceği port
const PORT = process.env.PORT || 3000;

// Sunucuyu başlat ve dinlemeye başla
server.listen(PORT, () => {
    console.log(`Sunucu ${PORT} portunda dinliyor...`);
});

// Hata durumunda sunucuyu kapat
process.on('SIGINT', () => {
    server.close(() => {
        console.log('Sunucu kapatıldı.');
        process.exit(0);
    });
});