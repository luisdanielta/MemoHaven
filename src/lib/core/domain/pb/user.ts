import type { PbT } from '.';
import type { IUser } from '../entities/user';

export interface PbUser extends IUser, PbT {
	emailVisibility: boolean;
}
