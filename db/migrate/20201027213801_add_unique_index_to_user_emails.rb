# frozen_string_literal: true

class AddUniqueIndexToUserEmails < ActiveRecord::Migration[6.0]
  def change
    remove_index :users, :email
    add_index :users, :email, unique: true
  end
end
