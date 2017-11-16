json.pokemon do
  json.extract! @pokemon, :id, :name, :attack, :defense, :poke_type, :moves
  json.image asset_path(@pokemon.image_url)
end

json.items do
  json.array! @pokemon.items do |item|
    json.extract! item, :id, :name, :pokemon_id, :price, :happiness
    json.image asset_path(item.image_url)
  end
end
