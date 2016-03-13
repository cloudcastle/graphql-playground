UserProfileType = GraphQL::ObjectType.define do
  name "UserProfile"
  description "User details to display in header"
  field :name, types.String, "The name of this user"
  field :email, types.String,  "The email of this user"
end

