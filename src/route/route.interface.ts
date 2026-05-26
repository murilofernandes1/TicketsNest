import { Status } from '../types/driver.types.js';
import {
  AttributeRoute,
  RouteDTO,
  RouteResponse,
  UpdateStatus,
} from '../types/route.types.js';

export abstract class RouteInterface {
  abstract create(data: RouteDTO): Promise<RouteResponse>;
  abstract seeRoute(id: string): Promise<RouteResponse | null>;
  abstract allRoutes(): Promise<RouteResponse[] | null>;
  abstract attributeRoute(data: AttributeRoute): Promise<RouteResponse>;
  abstract updateStatus(data: UpdateStatus): Promise<RouteResponse>;
  abstract deleteRoute(id: string);
}
