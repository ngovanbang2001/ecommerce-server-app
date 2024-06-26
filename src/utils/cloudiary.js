import {v2 as cloudinary} from 'cloudinary';

    // Configuration
    cloudinary.config({ 
        cloud_name: process.env.CLOUDIARY_NAME, 
        api_key: process.env.API_KEY_CLOUDIARY, 
        api_secret: process.env.API_SECRET_KEY_CLOUDIARY
    });   
  
  export default cloudinary