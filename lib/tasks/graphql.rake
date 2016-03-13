namespace :graphql do
  desc 'Generates schema.json under webpack folder'
  task :update_schema_json => :environment do
    schema_dump = RelayOnRailsSchema.execute(GraphQL::Introspection::INTROSPECTION_QUERY)
    Rails.root.join('webpack', 'schema.json').write(schema_dump.to_json)
  end
end