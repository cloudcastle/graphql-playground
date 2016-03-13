QueryType = GraphQL::ObjectType.define do
  name 'Query'
  description 'The query root of this schema. See available queries.'

  field :trends, types[TrendSummaryType] do
    description 'List of trends available to the user'
    resolve -> (obj, args, ctx) {
      Trend.all.map { |trend| TrendSummaryDecorator.new(trend) }
    }
  end

  field :trend, TrendType do
    argument :id, !types.ID
    description 'Root object to get viewer related collections'
    resolve -> (obj, args, ctx) {
      Trend.find(args['id'])
    }
  end

  field :user, UserType do
    description 'Current User info'
    resolve -> (obj, args, ctx) {
      User.first
    }
  end
end