def possible(A, P, B, E):
        dicts = {}
        for arm, position in zip(A,P):
            dicts[position] = arm
        res = { pos:arm for pos, arm in sorted(dicts.items(), key = lambda kv:kv[0])}

        if B>E:
            B,E = E,B
        for pos, arm in res.items():
            start = pos-arm
            end = pos+arm
            #if package is within Crane Limit, I can pick it up
            if start <= B and end >= B:
                #But can I drop it off?
                #The same crane can drop it off
                if end<=E:
                    return True
                else:
                    B = end
        return False