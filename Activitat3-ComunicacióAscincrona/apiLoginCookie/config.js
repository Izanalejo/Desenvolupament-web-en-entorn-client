const config = {
    db: { 
        host: "localhost", 
        user: "root", 
        password: "", 
        database: "test_api",
    },
    // Claves secretas diferentes para cada token
    secretKey: "clau_secreta_super_segura",
    refreshSecretKey: "clau_encara_mes_secreta_per_refresh",
    // Tiempos de expiración
    accessTokenLife: '15m',
    refreshTokenLife: '7d'
};
module.exports = config;