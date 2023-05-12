import { HttpResponse } from "./http";
import {Response} from 'express';

export function ok(res: Response, data: HttpResponse){
    return res.status(200).json(data);
}

export function badRequest(res: Response, data: HttpResponse) {
  return res.status(400).json(data);
}

export function unauthorized(res: Response, data: HttpResponse) {
  return res.status(401).json(data);
}