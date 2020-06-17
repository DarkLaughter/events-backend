class EventSerializer < ActiveModel::Serializer
  attributes :id, :title, :date, :content, :current_users

  def current_users
    object.users.map {|user| {name: user.name, contact: user.contact}}
  end

end
