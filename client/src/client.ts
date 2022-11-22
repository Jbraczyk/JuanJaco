import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://dnqxcldiftfmgpzatxuz.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRucXhjbGRpZnRmbWdwemF0eHV6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njg0OTkwMjMsImV4cCI6MTk4NDA3NTAyM30.K62zD1mmQKqDkPcFM3E5BAblsRx4G40_hIPY-KYesoU')

export const userStatus = async() => await supabase.auth.getUser()