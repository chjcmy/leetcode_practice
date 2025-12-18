import sys

def solution():
    try:
        input_data = sys.stdin.read().split()
        if not input_data:
            return
        
        iterator = iter(input_data)
        try:
            n = int(next(iterator))
            s = int(next(iterator))
            m = int(next(iterator))
            volumelists = []
            for _ in range(n):
                volumelists.append(int(next(iterator)))
        except StopIteration:
            return

        currentvolumes = {s}

        for v_diff in volumelists:
            nextvolumes = set()
            for v in currentvolumes:
                if v + v_diff <= m:
                    nextvolumes.add(v + v_diff)
                if v - v_diff >= 0:
                    nextvolumes.add(v - v_diff)

            if not nextvolumes:
                print(-1)
                return
            
            currentvolumes = nextvolumes
        
        print(max(currentvolumes))
    except Exception:
        return

if __name__ == "__main__":
    solution()
