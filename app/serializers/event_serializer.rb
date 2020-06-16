class EventSerializer < ActiveModel::Serializer
  attributes :id, :title, :date, :content, :current_users

  def current_users
    object.users.map {|user| {name: user.name, username: user.username, bio: user.bio, img_url: user.img_url}}
  end

end
