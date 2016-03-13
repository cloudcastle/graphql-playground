ChartType = GraphQL::ObjectType.define do
  name "Chart"
  description "Char series with names"
  field :name, types.String, "Fake chart title"
  # TBD ...
end