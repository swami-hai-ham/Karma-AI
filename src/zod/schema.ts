import {z} from 'zod';

const nameS = z.string().min(1);

const emailS = z.string().email();

const passwordS = z.string().min(6);

const linkS = z.string().url();

const todoS = z.string().max(30).min(1);

export {nameS, emailS, passwordS, linkS, todoS};

