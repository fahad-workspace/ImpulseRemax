# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version : 20150524095349) do

create_table "cities", force : :cascade do | t |
t.string "city_name"
t.datetime "created_at", null : false
t.datetime "updated_at", null : false
end

create_table "impulse_databases", force : :cascade do | t |
t.integer "property_id"
t.string "property_type"
t.float "budget"
t.integer "number_of_rooms"
t.string "city"
t.string "locality"
t.integer "contact_number"
t.date "posted_on"
end

create_table "promos", force : :cascade do | t |
t.string "promo_heading"
t.string "promo_content"
t.string "promo_extra_content"
t.string "promo_number"
t.integer "promo_priority"
t.datetime "created_at", null : false
t.datetime "updated_at", null : false
end

create_table "types", force : :cascade do | t |
t.string "property_type"
t.datetime "created_at", null : false
t.datetime "updated_at", null : false
end

end
