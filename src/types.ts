export interface ROICalculatorInput {
  leadCount: number;         // leads per month
  averageJobValue: number;   // e.g. $4500
  missedLeadRate: number;    // e.g. 27% (from citation)
  closeRate: number;         // e.g. 35% on answered calls
}

export interface ROICalculatorOutput {
  missedLeadsPerMonth: number;
  lostRevenuePerMonth: number;
  recoveredJobsPerMonth: number;
  recoveredRevenuePerMonth: number;
  roiMultiplier: number;
}

export interface SimulationStep {
  id: 'idle' | 'trigger' | 'routing' | 'calling' | 'success';
  title: string;
  description: string;
  duration: number;
}

export interface ChatMessage {
  sender: 'agent' | 'customer';
  text: string;
  timestamp: string;
}

export interface Booking {
  id: string;
  name: string;
  companyName: string;
  phone: string;
  email: string;
  date: string;
  timeSlot: string;
  province: string;
}
