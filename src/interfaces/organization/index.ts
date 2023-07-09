import { AccountManagerInterface } from 'interfaces/account-manager';
import { EndCustomerInterface } from 'interfaces/end-customer';
import { SalesRepresentativeInterface } from 'interfaces/sales-representative';
import { TeamMemberInterface } from 'interfaces/team-member';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface OrganizationInterface {
  id?: string;
  description?: string;
  image?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  account_manager?: AccountManagerInterface[];
  end_customer?: EndCustomerInterface[];
  sales_representative?: SalesRepresentativeInterface[];
  team_member?: TeamMemberInterface[];
  user?: UserInterface;
  _count?: {
    account_manager?: number;
    end_customer?: number;
    sales_representative?: number;
    team_member?: number;
  };
}

export interface OrganizationGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  image?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
