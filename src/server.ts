import fastify from 'fastify';
import { serializerCompiler, validatorCompiler} from 'fastify-type-provider-zod';
import { createEvent } from './routes/create-event';
import { registerForEvent } from './routes/register-for-event';
import { getEvent } from './routes/get-event';
import { getAttendeeBadge } from './routes/get-attendee-badge';


const app = fastify();

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.register(createEvent);
app.register(registerForEvent);
app.register(getEvent);
app.register(getAttendeeBadge)

const PORT = 3333;
app.listen({port: PORT}).then(() => {
  console.log(`Server is running on http://localhost:${PORT}`);
})