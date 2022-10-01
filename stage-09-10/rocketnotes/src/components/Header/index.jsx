import { RiShutDownLine } from 'react-icons/ri';
import { Container, Profile, Logout } from "./styles";
import { useAuth } from '../../hooks/auth';

export function Header() {
  const { signOut } = useAuth();
  return (
    <Container>
      <Profile to="/profile">
        <img 
          src="http://github.com/kauanhindlmayer.png"
          alt="user photo"
        />

        <div>
          <span>Welcome</span>
          <strong>Kauan Hindlmayer</strong>
        </div>        

      </Profile>

      <Logout onClick={signOut}>
        <RiShutDownLine />
      </Logout>
    </Container>
  );
}