import { PropsWithChildren } from 'react';
import Realm from 'realm';
import { RealmProvider, UserProvider } from '@realm/react';
import {Task} from "@/src/models/Task";
import {AppProvider} from "@realm/react/src";
import AnonymousLogin from "@/src/components/anonymous-login";

const appId = 'application-0-xqohf';

export default function RealmCustomProvider({ children }: PropsWithChildren) {
  return (
    <AppProvider id={appId}>
      <UserProvider fallback={AnonymousLogin}>
        <RealmProvider
          schema={[Task]}
          sync={{
            flexible: true,
            onError: (_session, error) => {
              console.log(error);
            },
            initialSubscriptions: {
              update(subs, realm) {
                subs.add(realm.objects('Task'));
              },
              rerunOnOpen: true,
            },
          }}
        >
          {children}
        </RealmProvider>
      </UserProvider>
    </AppProvider>
  )
}
