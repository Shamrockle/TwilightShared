import sequelize from './sequelize';
import { SyncOptions } from 'sequelize';

/**
 * Initializes and syncs all models with the database.
 * @param options Optional Sequelize sync options.
 */
export async function initializeDatabase(options?: SyncOptions): Promise<void> {
    try {
        await sequelize.authenticate(); // Ensure the connection is valid
        await sequelize.sync(options); // Sync all models
        console.log('Database synchronized successfully.');
    } catch (error) {
        console.error('Error synchronizing the database:', error);
        throw error;
    }
}