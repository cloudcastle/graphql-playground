QueryType = GraphQL::ObjectType.define do
  name "Query"
  description "The query root of this schema. See available queries."

  # Get Post by ID
  # field :post, PostType do
  #   argument :id, !types.ID
  #   description 'Root object to get viewer related collections'
  #   resolve -> (obj, args, ctx) {
  #     Post.find(args["id"])
  #   }
  # end

  field :user, UserType do
    argument :id, !types.ID
    description 'Root object to get viewer related collections'
    resolve -> (obj, args, ctx) {
      User.find(args["id"])
    }
  end
end