TrendSummaryType = GraphQL::ObjectType.define do
  name "TrendSummary"
  description "Brief description of a trend"
  field :id, types.ID, 'Trend ID'
  field :name, types.String, "Short name of a trend"
  field :description, types.String, "A paragraph of text explaining the trend"
end