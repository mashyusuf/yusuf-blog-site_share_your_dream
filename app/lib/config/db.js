import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const ConnectDB = async () => {
    try {
        const connection = await mongoose.connect(
            `mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASS}@cluster0.ziugtg4.mongodb.net/next-blog`,
            
        );
        console.log('MongoDB Connected:', connection.connection.host);
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1); 
    }
};

export default ConnectDB;
