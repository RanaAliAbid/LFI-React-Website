'use server';
 
import { cookies } from 'next/headers'
 
async function getTermsAndCondition() {
  return cookies().get('termsAndCondition');
}

async function setTermsAndCondition(value: string) {
  return cookies().set('termsAndCondition', value);
}

export {
    getTermsAndCondition,
    setTermsAndCondition,
}