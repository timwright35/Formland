bird = {
			x = 256,
			y = 150,
			x_vel = 0,
			y_vel = 0,
			jump_vel = -768,
			speed = 256,
			flySpeed = 700,
			state = "",
			h = 32,
			w = 32,
			standing = false,
			flying = true,
		}
		
function bird:update(dt)
	self.x = self.x + (dt * 50)
end

function bird:draw()
	love.graphics.setColor( 50, 150, 200 )
	love.graphics.rectangle("fill", bird.x - bird.w/2, bird.y - bird.h/2, bird.w, bird.h)
end

return bird