/*
  # Dental Clinic Database Schema
  
  Creates tables for managing patient appointments and contact inquiries for DR. JSR Dental Health Speciality.
  
  1. New Tables
    - `appointments`
      - `id` (uuid, primary key) - Unique identifier for each appointment
      - `patient_name` (text) - Full name of the patient
      - `email` (text) - Patient email address
      - `phone` (text) - Patient contact number
      - `preferred_date` (date) - Preferred appointment date
      - `preferred_time` (text) - Preferred appointment time slot
      - `service` (text) - Type of dental service requested
      - `message` (text) - Additional notes or concerns from patient
      - `status` (text) - Appointment status (pending, confirmed, completed, cancelled)
      - `created_at` (timestamptz) - Timestamp when appointment was requested
    
    - `contact_inquiries`
      - `id` (uuid, primary key) - Unique identifier for each inquiry
      - `name` (text) - Name of the person making inquiry
      - `email` (text) - Contact email address
      - `phone` (text) - Contact phone number
      - `subject` (text) - Subject of the inquiry
      - `message` (text) - Detailed message
      - `created_at` (timestamptz) - Timestamp when inquiry was submitted
  
  2. Security
    - Enable Row Level Security (RLS) on both tables
    - Add policies to allow public users to insert their own data
    - Restrict read access to authenticated admin users only (for future admin panel)
  
  3. Indexes
    - Add indexes on created_at for efficient sorting and filtering
    - Add index on status for appointments table for quick status-based queries
*/

-- Create appointments table
CREATE TABLE IF NOT EXISTS appointments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  patient_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  preferred_date date NOT NULL,
  preferred_time text NOT NULL,
  service text NOT NULL,
  message text DEFAULT '',
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

-- Create contact_inquiries table
CREATE TABLE IF NOT EXISTS contact_inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  subject text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE appointments ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_inquiries ENABLE ROW LEVEL SECURITY;

-- Policies for appointments table
-- Allow anyone to insert appointment requests (public booking)
CREATE POLICY "Anyone can book appointments"
  ON appointments
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow authenticated users (future admin) to view all appointments
CREATE POLICY "Authenticated users can view appointments"
  ON appointments
  FOR SELECT
  TO authenticated
  USING (true);

-- Allow authenticated users (future admin) to update appointment status
CREATE POLICY "Authenticated users can update appointments"
  ON appointments
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Policies for contact_inquiries table
-- Allow anyone to submit contact inquiries
CREATE POLICY "Anyone can submit contact inquiries"
  ON contact_inquiries
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow authenticated users (future admin) to view all inquiries
CREATE POLICY "Authenticated users can view inquiries"
  ON contact_inquiries
  FOR SELECT
  TO authenticated
  USING (true);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS appointments_created_at_idx ON appointments(created_at DESC);
CREATE INDEX IF NOT EXISTS appointments_status_idx ON appointments(status);
CREATE INDEX IF NOT EXISTS contact_inquiries_created_at_idx ON contact_inquiries(created_at DESC);