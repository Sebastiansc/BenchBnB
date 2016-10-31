class Api::BenchesController < ApplicationController
  def index
    @benches = Bench.all
  end

  def create
    @bench = Bench.new(bench_params)
    if @bench.valid?
      @bench.save!
      render :show
    else
      render json: @bench.errors.full_messages, status: 422
    end
  end

  def destroy
    @bench = Bench.find(params[:id])
    @bench.destroy!
    render json: ["Success"]
  end

  private
  def bench_params
    params.require(:bench).permit(:description, :lat, :lng, :image_url, :rating)
  end
end
