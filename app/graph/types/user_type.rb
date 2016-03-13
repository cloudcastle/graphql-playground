UserType = GraphQL::ObjectType.define do
  name "User"
  description "An user entry, returns basic user information"
  # Expose fields from the model
  field :id, types.ID, "This id of this user"
  field :profile, UserProfileType do
    description 'Data for the page header'
    resolve -> (obj, args, ctx) { obj }
  end
end