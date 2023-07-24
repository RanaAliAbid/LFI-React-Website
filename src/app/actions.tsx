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

async function getMarketingCookie() {
  return cookies().get('marketingCookie');
}

async function setMarketingCookie(value: string) {
  return cookies().set('marketingCookie', value);
}

async function getPersonalizationCookie() {
  return cookies().get('personalizationCookie');
}

async function setPersonalizationCookie(value: string) {
  return cookies().set('personalizationCookie', value);
}

async function getAnalyticsCookie() {
  return cookies().get('analyticsCookie');
}

async function setAnalyticsCookie(value: string) {
  return cookies().set('analyticsCookie', value);
}

export {
    getTermsAndCondition,
    setTermsAndCondition,
    getLegalDesclaimerCookie,
    setLegalDesclaimerCookie,
    getMarketingCookie,
    setMarketingCookie,
    getPersonalizationCookie,
    setPersonalizationCookie,
    getAnalyticsCookie,
    setAnalyticsCookie,

}