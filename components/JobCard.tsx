import React from 'react';
import { Job } from '../types';
import { MapPin, Clock, Euro } from 'lucide-react';

interface JobCardProps {
  job: Job;
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow p-6 flex flex-col h-full group">
      <div className="flex justify-between items-start mb-4">
        <div>
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-800 mb-2">
            {job.category}
          </span>
          <h3 className="text-xl font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
            {job.title}
          </h3>
          <p className="text-slate-600 font-medium">{job.company}</p>
        </div>
      </div>
      
      <div className="space-y-2 mb-4 text-sm text-slate-500">
        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4" />
          <span>{job.location}</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="h-4 w-4" />
          <span>{job.type} • {job.postedAt}</span>
        </div>
        <div className="flex items-center gap-2">
          <Euro className="h-4 w-4" />
          <span>{job.salary}</span>
        </div>
      </div>

      <p className="text-slate-600 text-sm mb-4 line-clamp-3 flex-grow">
        {job.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {job.tags.map(tag => (
          <span key={tag} className="px-2 py-1 bg-slate-50 text-slate-600 text-xs rounded border border-slate-200">
            {tag}
          </span>
        ))}
      </div>

      <button className="w-full mt-auto bg-slate-900 text-white py-2.5 rounded-lg font-medium hover:bg-amber-600 transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-amber-500">
        Jetzt bewerben
      </button>
    </div>
  );
};

export default JobCard;
