const mapping: Record<string, string> = {
  'account-managers': 'account_manager',
  'end-customers': 'end_customer',
  organizations: 'organization',
  'sales-representatives': 'sales_representative',
  'team-members': 'team_member',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
