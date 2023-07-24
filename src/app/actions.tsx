'use server';
 
import { cookies } from 'next/headers'
 
async function getTermsAndCondition() {
  return cookies().get('termsAndCondition');
}

async function setTermsAndCondition(value: string) {
  return cookies().set('termsAndCondition', value);
}

async function getLegalDesclaimerCookie() {
  return cookies().get('legalDesclaimerCookie');
}

async function setLegalDesclaimerCookie(value: string) {
  return cookies().set('legalDesclaimerCookie', value);
}

export {
    getTermsAndCondition,
    setTermsAndCondition,
    getLegalDesclaimerCookie,
    setLegalDesclaimerCookie,
}