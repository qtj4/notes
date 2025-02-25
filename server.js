const app = require('./app');

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

if (process.env.NODE_ENV === 'development') {
    process.on('unhandledRejection', (err) => {
        console.log('UNHANDLED REJECTION! Shutting down...');
        console.error(err);
        process.exit(1);
    });

    process.on('uncaughtException', (err) => {
        console.log('UNCAUGHT EXCEPTION! Shutting down...');
        console.error(err);
        process.exit(1);
    });
}