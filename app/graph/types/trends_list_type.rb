TrendsListType = GraphQL::ObjectType.define do
  name 'TrendsList'
  description 'A root TrendsList entry'
  connection :summaries, TrendSummaryType.connection_type do
    description 'List of trend summaries'
    resolve -> (obj, args, ctx) {
      obj.trends(args)
    }
  end
end
