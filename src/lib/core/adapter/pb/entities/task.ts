import type { PbT } from '.';
import type { ITask } from '../../../domain/entities/task';

export interface PbTask extends ITask, PbT {}
