import { AccountManagerInterface } from 'interfaces/account-manager';
import { EndCustomerInterface } from 'interfaces/end-customer';
import { SalesRepresentativeInterface } from 'interfaces/sales-representative';
import { TeamMemberInterface } from 'interfaces/team-member';

import { GetQueryInterface } from '../get-query.interface';

export interface UserInterface {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  roq_user_id: string;
  tenant_id: string;

  account_manager: AccountManagerInterface[];
  end_customer: EndCustomerInterface[];
  sales_representative: SalesRepresentativeInterface[];
  team_member: TeamMemberInterface[];
}

export interface UserGetQueryInterface extends GetQueryInterface {
  roq_user_id?: string;
  tenant_id?: string;
}
