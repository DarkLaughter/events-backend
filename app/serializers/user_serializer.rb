class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :contact, :username, :current_events

  def current_events
    object.events.map {|event| {title: event.title, date: event.date, content: event.content}}
  end
end
