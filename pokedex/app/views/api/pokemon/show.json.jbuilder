json.pokemon do
  json.extract! @pokemon, :id, :name, :attack, :defense, :poke_type, :moves
  json.image_url asset_path(@pokemon.image_url)
  ids = []
  @pokemon.items.each do |item|
    ids << item.id
  end
  json.item_ids ids
end

json.items do
  json.array! @pokemon.items do |item|
    json.extract! item, :id, :name, :pokemon_id, :price, :happiness, :image_url
    # json.image_url asset_path(item.image_url)
  end
end
