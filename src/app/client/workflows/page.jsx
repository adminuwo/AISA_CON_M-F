'use client';

import React, { useState, useEffect } from 'react';
import { Plus, Trash2, Loader2, X, GitBranch, ArrowRight, Play, Pause } from 'lucide-react';
import axios from 'axios';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { templateData } from './templateData';

const ClientWorkflowsPage = () => {
  const [workflows, setWorkflows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalStep, setModalStep] = useState('templates'); // 'templates' | 'name'
  const [newWorkflowName, setNewWorkflowName] = useState('');
  const [isCreating, setIsCreating] = useState(false);

  const workflowTemplates = [
    "Hospital",
    "Mall",
    "Real Estate",
    "School"
  ];

  const fetchWorkflows = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem('token');
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8080'}/api/workflows/`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setWorkflows(res.data);
    } catch (err) {
      console.error('Failed to fetch workflows');
    } finally {
      setLoading(false);
    }
  };

  // Re-fetching properly
  const fetchData = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem('token');
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8080'}/api/workflows/`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setWorkflows(res.data);
    } catch (err) {
      console.error('Failed to fetch workflows');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleCreate = async (e, overrideName = null) => {
    if (e) e.preventDefault();
    try {
      setIsCreating(true);
      const token = localStorage.getItem('token');
      const finalName = overrideName || newWorkflowName || 'Untitled Workflow';
      
      let initialSteps = { nodes: [], edges: [] };
      if (overrideName && templateData[overrideName] && templateData[overrideName].nodes.length > 0) {
        initialSteps = templateData[overrideName];
      }

      const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8080'}/api/workflows/`, {
        name: finalName,
        trigger_type: 'KEYWORD',
        steps: initialSteps,
        enabled: false
      }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      
      // Redirect to builder
      window.location.href = `/client/workflows/builder/${res.data.id}`;
    } catch (err) {
      alert('Failed to create workflow');
      setIsCreating(false);
    }
  };

  const handleToggle = async (id, currentStatus) => {
    try {
      const token = localStorage.getItem('token');
      await axios.patch(`${process.env.NEXT_PUBLIC_API_URL || `${process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8080'}`}/api/workflows/${id}/`, {
        enabled: !currentStatus
      }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      fetchData();
    } catch (err) {
      console.error('Toggle failed');
    }
  };

  const handleDelete = async (id) => {
    if (!confirm('Are you sure? This will delete the entire workflow.')) return;
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`${process.env.NEXT_PUBLIC_API_URL || `${process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8080'}`}/api/workflows/${id}/`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      fetchData();
    } catch (err) {
      console.error('Delete failed');
    }
  };

  return (
    <DashboardLayout role="CLIENT">
      <div className="max-w-full mx-auto pb-20 px-8">
        {/* Header */}
        <div className="mb-12 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 tracking-tight mb-2">Workflows</h1>
            <p className="text-slate-500 font-medium italic">Create complex, multi-step automation sequences.</p>
          </div>
          <button
            onClick={() => { setIsModalOpen(true); setModalStep('templates'); }}
            className="px-6 py-3 bg-blue-600 text-white rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-slate-900 transition-all shadow-xl shadow-blue-100 flex items-center gap-2"
          >
            <Plus size={16} />
            Create Workflow
          </button>
        </div>

        {/* Workflow Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading ? (
            <div className="col-span-full py-20 text-center"><Loader2 className="animate-spin text-blue-600 mx-auto" /></div>
          ) : workflows.length === 0 ? (
            <div className="col-span-full py-32 bg-white border border-dashed border-slate-200 rounded-[40px] text-center">
              <div className="w-16 h-16 bg-slate-50 text-slate-300 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <GitBranch size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">No Workflows Yet</h3>
              <p className="text-sm text-slate-400 italic mb-8">Start by creating your first automated sequence.</p>
              <button onClick={() => { setIsModalOpen(true); setModalStep('templates'); }} className="px-8 py-3 bg-slate-900 text-white rounded-2xl font-bold text-xs uppercase tracking-widest">Build First Flow</button>
            </div>
          ) : (
            workflows.map((flow) => (
              <motion.div 
                key={flow.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white border border-slate-100 rounded-[40px] p-8 shadow-sm hover:shadow-xl hover:shadow-slate-100 transition-all group relative overflow-hidden"
              >
                {/* Status Indicator */}
                <div className={cn("absolute top-0 right-0 px-6 py-2 rounded-bl-3xl text-[10px] font-bold uppercase tracking-widest", flow.enabled ? "bg-emerald-50 text-emerald-600" : "bg-slate-50 text-slate-400")}>
                  {flow.enabled ? 'Active' : 'Paused'}
                </div>

                <div className="flex flex-col h-full">
                  <div className="mb-6">
                    <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <GitBranch size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 tracking-tight mb-2 group-hover:text-blue-600 transition-colors">{flow.name}</h3>
                    <p className="text-xs text-slate-400 font-medium italic">{flow.steps?.nodes?.length || 0} Nodes in this flow</p>
                  </div>

                  <div className="mt-auto pt-8 border-t border-slate-50 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <button onClick={() => handleToggle(flow.id, flow.enabled)} className={cn("p-3 rounded-xl transition-all", flow.enabled ? "bg-red-50 text-red-500 hover:bg-red-100" : "bg-emerald-50 text-emerald-600 hover:bg-emerald-100")}>
                        {flow.enabled ? <Pause size={18} /> : <Play size={18} />}
                      </button>
                      <button onClick={() => handleDelete(flow.id)} className="p-3 bg-slate-50 text-slate-400 rounded-xl hover:bg-red-50 hover:text-red-500 transition-all">
                        <Trash2 size={18} />
                      </button>
                    </div>
                    <Link 
                      href={`/client/workflows/builder/${flow.id}`}
                      className="flex items-center gap-2 text-[10px] font-bold text-slate-900 uppercase tracking-[0.2em] hover:text-blue-600 transition-colors"
                    >
                      Open Builder <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))
          )}
        </div>

        {/* Create Modal */}
        <AnimatePresence>
          {isModalOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsModalOpen(false)} className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" />
              <motion.div initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }} className="relative bg-white w-full max-w-2xl rounded-[32px] shadow-2xl flex flex-col max-h-[90vh] overflow-hidden">
                
                {modalStep === 'templates' ? (
                  <div className="flex flex-col h-full max-h-[90vh]">
                    {/* Header */}
                    <div className="flex items-center justify-between p-6 border-b border-slate-100 shrink-0">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-slate-50 text-slate-600 rounded-xl flex items-center justify-center">
                           <GitBranch size={20} />
                        </div>
                        <h2 className="text-xl font-bold text-slate-900 tracking-tight">Choose from the Workflow</h2>
                      </div>
                      <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-slate-900 transition-colors"><X size={24} /></button>
                    </div>

                    {/* Body */}
                    <div className="overflow-y-auto p-6 space-y-6 flex-1 min-h-0">
                       <div className="p-5 bg-emerald-50/50 text-emerald-700 rounded-2xl text-sm font-medium border border-emerald-100/50 shrink-0">
                         Looking for a faster and more efficient way to create stunning Workflows? Look no further than our templates!
                       </div>
                       
                       <div className="border border-slate-100 rounded-2xl divide-y divide-slate-100 overflow-hidden shadow-sm">
                         {workflowTemplates.map((template, idx) => (
                           <div 
                             key={idx} 
                             onClick={() => handleCreate(null, template)} 
                             className="p-5 hover:bg-slate-50 cursor-pointer transition-colors text-slate-700 font-medium flex items-center justify-between group"
                           >
                             <span>{template}</span>
                             {isCreating ? <Loader2 size={16} className="text-blue-600 animate-spin opacity-0 group-hover:opacity-100" /> : <ArrowRight size={16} className="text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity" />}
                           </div>
                         ))}
                       </div>
                    </div>

                    {/* Footer */}
                    <div className="p-6 border-t border-slate-100 flex justify-end bg-slate-50/50 shrink-0">
                       <button 
                         onClick={() => handleCreate(null, 'Untitled Workflow')} 
                         disabled={isCreating}
                         className="px-6 py-3 bg-slate-800 hover:bg-slate-900 text-white rounded-xl font-bold text-sm flex items-center gap-2 transition-all shadow-md shadow-slate-200"
                       >
                         {isCreating ? <Loader2 size={18} className="animate-spin" /> : <Plus size={18} />}
                         Create from Scratch
                       </button>
                    </div>
                  </div>
                ) : (
                  <div className="p-10">
                    <div className="flex items-center justify-between mb-8">
                      <h2 className="text-2xl font-bold text-slate-900 tracking-tight">New Workflow</h2>
                      <button onClick={() => setIsModalOpen(false)} className="text-slate-300 hover:text-slate-900 transition-colors"><X size={24} /></button>
                    </div>
                    <form onSubmit={handleCreate} className="space-y-6">
                      <div>
                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 block ml-1">Workflow Name</label>
                        <input 
                          required 
                          value={newWorkflowName} 
                          onChange={e => setNewWorkflowName(e.target.value)} 
                          placeholder="e.g. Onboarding Sequence" 
                          className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-5 py-4 outline-none focus:border-blue-500 transition-all font-semibold" 
                        />
                      </div>
                      <div className="flex gap-4">
                        <button 
                          type="button" 
                          onClick={() => setModalStep('templates')} 
                          className="w-1/3 py-4 bg-slate-100 text-slate-600 rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-slate-200 transition-all"
                        >
                          Back
                        </button>
                        <button 
                          type="submit" 
                          disabled={isCreating} 
                          className="w-2/3 py-4 bg-blue-600 text-white rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-blue-700 transition-all shadow-xl shadow-blue-100 flex items-center justify-center gap-2"
                        >
                          {isCreating ? <Loader2 size={16} className="animate-spin" /> : 'Create & Open Builder'}
                        </button>
                      </div>
                    </form>
                  </div>
                )}
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </DashboardLayout>
  );
};

export default ClientWorkflowsPage;
