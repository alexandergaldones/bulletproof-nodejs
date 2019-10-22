import { IExperienceTypes } from '../interfaces/IExperienceType';
import mongoose from 'mongoose';

const ExperienceType = new mongoose.Schema(
  {
    experienceName: {
      type: String,
      required: [true, 'Please enter an experience name']
    },
    experiencesBreakdown: [
      {
        experienceName: {
            type : String,
            required: true
        },
        experienceShortDesc: {
            type: String,
            required: true
        },
        experienceFullDesc: {
            type: String,
            required: true
        },
      }
    ]
  }
)
