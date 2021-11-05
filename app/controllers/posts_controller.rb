class PostsController < ApplicationController
  before_action :authenticate_user!, only: :new
  def index
    @posts = Post.all
  end

  def show
    @post = Post.find(params[:id])
  end

  def new
    @post = Post.new
  end

  def create
    @post = Post.new(post_params)
    if @post.save
      redirect_to post_path(@post)
    else
      render new
    end
  end

  private

  def post_params
    params.require(:post).permit(:title, :description, :body, :photo)
  end
end
