'use server'
 
import { cookies } from 'next/headers'
 
async function getTermsAndCondition() {
  return cookies().get('termsAndCondition');
}

export {
    getTermsAndCondition,
}