import { ITouristAttraction } from '../interfaces/ITouristAttraction';
import mongoose from 'mongoose';

const TouristAttraction = new mongoose.Schema(
  {
    name: { type: String, required: true },
    region: { type: String, required: true },
    city: String,
    baranggay: String,
    shortDescription: String,
    mapLong: String,
    mapLat: String,
    fullDescription: String,
    touristRating: String,
    editorRating: String,
    touristSpotType: String, // beach, theme park etc.
    pictureHighlights: {
        type: [String],
        required: true
    },
    thingsTodo: {
        type: [String],
        required: true
    },
    activities: [
        {
            activityName: {
                type : String,
                required: true
            },
            activityShortDesc: {
                type: String,
                required: true
            },
            activityFullDesc: {
                type: String,
                required: true
            },
        }
    ]
  }, { timestamps: true });

export default mongoose.model<ITouristAttraction & mongoose.Document>('TouristAttraction', TouristAttraction);
