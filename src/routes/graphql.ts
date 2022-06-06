import type { RequestHandler } from './__types/graphql';
import { ezApp } from '../graphql/ez';

const { handler } = ezApp.buildApp();

export const get: RequestHandler = handler;

export const post: RequestHandler = handler;
