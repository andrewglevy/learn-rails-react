class PaperController < ApplicationController

  def index
    render react_component: 'Paper'
  end

end
